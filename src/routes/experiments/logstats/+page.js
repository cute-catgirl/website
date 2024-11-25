export const load = async ({ fetch }) => {
    const response = await fetch(`/api/logiverse/count`);
    const counts = await response.json();

    return {
        counts
    };
};