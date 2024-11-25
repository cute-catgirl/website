import { config } from '$lib/logiverse.js';
import { json } from '@sveltejs/kit';

export async function GET() {
    const instances = await Promise.all(
        config.instances.map(({ endpoints, name }) => 
            fetch(endpoints.feed)
                .then(res => res.json())
                .catch(() => ([]))
                .then(feed => ({ name, feed }))
        )
    );

    const counts = instances.reduce((acc, instance) => {
        if (Array.isArray(instance.feed)) {
            acc[instance.name] = instance.feed.length;
        } else {
            acc[instance.name] = 0;
        }
        return acc;
    }, {});
    
    return json(counts);
};