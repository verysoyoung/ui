module.exports = {
  style: 'default',
  rsc: true,
  tailwind: {
    config: 'tailwind.config.js',
    css: 'app/globals.css',
    baseColor: 'slate',
    cssVariables: false,
  },
  aliases: {
    components: '@/components',
    utils: '@/lib/utils',
  },
}
