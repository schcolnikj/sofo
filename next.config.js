/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['ar.freddo.com', "schockba.com.ar", "recetuquis.com", "img-global.cpcdn.com", "www.gastrolabweb.com", "badun.nestle.es", "encrypted-tbn0.gstatic.com", "i.ytimg.com", "www.piloncilloyvainilla.com", "t1.uc.ltmcdn.com"]
    },
    typescript: {
        ignoreBuildErrors: true;
    }
}

module.exports = nextConfig
