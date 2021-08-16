import TOC from "./TOC.vue"

export default {
  title: "Organism",
  component: "TOC",
  args: [
    {
      id: "h21",
      name: "h2",
      text: "ここに見出し2が入ります"
    },
    {
      id: "h31",
      name: "h3",
      text: "ここに見出し3が入ります"
    },
    {
      id: "h31",
      name: "h3",
      text: "ここに見出し3が入ります"
    },
    {
      id: "h22",
      name: "h2",
      text: "ここに見出し2が入ります"
    },
    {
      id: "h32",
      name: "h3",
      text: "ここに見出し3が入ります"
    },
    {
      id: "h33",
      name: "h3",
      text: "ここに見出し3が入ります"
    },
  ]

}

export const TOCParts = (args, { argTypes }) => ({
  components: { TOC },
  props: Object.keys(args),
  template: '<TOC :toc="$props"/>'
})