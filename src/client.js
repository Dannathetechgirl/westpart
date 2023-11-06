import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


// if (!process.env.REACT_APP_SANITY_PROJECT_ID || !process.env.REACT_APP_SANITY_TOKEN) {
//     throw new Error("Sanity environment variables are not set");
// }
// console.log('Debug Sanity Project ID:', process.env.REACT_APP_SANITY_PROJECT_ID);

export const client = sanityClient({
    projectId: 'fuueozo4',
    dataset: 'production',
    apiVersion: '2023-11-06',
    usedCdn: true,
    token: "skc8bRFQ7cKBoYeUjnuxN3mK0WFEIIGYgMaTKMdSnjVFOMELAj65gPDlS39HgBIxLlcZ68kv4N3rszMonVMfCBDcB8Q2UsMEuPAGXPn2hxH4WqQCNenCW6iqm6RUdJX06Q0Adz3pMK5EtekUlgFt88GeV9PBjJUgMvLEnfK7i3zGkKgXpBIA"

})

const builder = imageUrlBuilder(client)


export const urlFor = (source) => builder.image(source);