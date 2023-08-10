/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_PUBLIC_ZEGO_APP_ID: 1627205729,
        NEXT_PUBLIC_ZEGO_SERVER_ID: "10b62f54cfef2ad7f4215a00be829624"
    },
    images:{
        domains: ["localhost"]
    }
}

module.exports = nextConfig
