import Label from "./Label.vue"

export default {
  title: "Atoms",
  component: Label,
}

export const LabelParts = () => ({
  components: { Label },
  template: '<Label isLabel=true labelName="テスト"/>'
})