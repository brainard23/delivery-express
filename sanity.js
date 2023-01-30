import sanityClient from "@sanity/client"; 
import imageUrlBuilder from "@sanity/image-url"

const client = sanityClient({
    projectId: 'qwoxusny', 
    dataset: "production", 
    useCdn: true, 
    apiVersion: "2021-10-21"
})

const builder = imageUrlBuilder(client); 
export const urlFor = (source) => builder.image(source);

// RUN tis to add exception from localhost: 3000 CORS policy
// sanity cors add http://localhost:3333

export default client;