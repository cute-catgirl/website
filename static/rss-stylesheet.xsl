<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
        <head>
            <title>RSS Feed</title>
            <style>
                body { 
                    font-family: 'Inter', Arial, sans-serif;
                    background-color: #ECEFF4;
                    color: #2E3440;
                }
                h1 {
                    font-size: 1.4em;
                }
                ul { 
                    list-style-type: none; 
                    padding: 0; 
                }
                li { 
                    padding: 10px 0; 
                    border-bottom: 1px solid #ddd; 
                }
                a { 
                    text-decoration: none; 
                    color: #3B4252;
                    font-weight: bold;
                }
                a:hover { 
                    text-decoration: underline; 
                }
                .date { 
                    font-size: 0.9em; 
                    color: #434C5E;
                }
            </style>
        </head>
        <body>
            <h1>Mae Moon ~ RSS Feed</h1>
            <ul>
                <xsl:for-each select="rss/channel/item">
                    <li>
                        <a href="{link}">
                            <xsl:value-of select="title"/>
                        </a>
                        <div class="date">
                            <xsl:value-of select="pubDate"/>
                        </div>
                    </li>
                </xsl:for-each>
            </ul>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
