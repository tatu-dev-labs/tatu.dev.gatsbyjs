module.exports = {
    siteMetadata: {
        title: `tatu.dev | Diseñador UI/UX experto en Desarrollo Front-End y SEO`,
        description: `Gestión integral de proyectos web. Diseñador de UI/UX, experto en desarrollo Front-End y Optimización SEO OnPage y SEO Técnico`,
        author: `Aurelio Franco`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `tatu.dev`,
                short_name: `tatu.dev`,
                start_url: `/`,
                background_color: `#012840`,
                theme_color: `#ffd34e`,
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: `standalone`,
                icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        'gatsby-plugin-postcss',
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-fontawesome-css'
    ]
}