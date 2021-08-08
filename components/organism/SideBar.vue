<template>
  <div
    class="
      min-h-screen
      flex flex-col flex-auto flex-shrink-0
      antialiased
      bg-gray-50
      text-gray-800
    "
  >
    <div
      class="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg"
    >
      <div class="flex items-center pl-6 h-20 border-b border-gray-800">
        <img
          src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.0-9/117334168_2606581056324669_4951020710334194218_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFo4bRKc5SfTQvzhwotnTaOfj1P6rO41HF-PU_qs7jUcU1pCerqu3HUsOB0yKyJQwnrgz8Au7GZADcpedo6WgM4&_nc_ohc=DWpkI3p4RSUAX_hKF_Y&_nc_ht=scontent.fmnl13-1.fna&oh=c13c63ee952123b14f0da72b99ccecc8&oe=6087FEC5"
          alt=""
          class="
            rounded-full
            h-10
            w-10
            flex
            items-center
            justify-center
            mr-3
            border-2 border-blue-500
          "
        />
        <div class="ml-1">
          <p
            class="
              ml-1
              text-md
              font-medium
              tracking-wide
              truncate
              text-gray-100
              font-sans
            "
          >
            JED DYLAN LEE
          </p>
          <div class="badge">
            <span
              class="
                px-2
                py-0.5
                ml-auto
                text-xs
                font-medium
                tracking-wide
                text-blue-800
                bg-blue-100
                rounded-full
              "
              >Admin</span
            >
          </div>
        </div>
      </div>
      <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <SideBarContainer
          :sideBarProps="sideBarProps"
          sideBarHead="DashBoard"
        />
        <SideBarContainer
          :sideBarProps="sideBarProps"
          sideBarHead="Settings"
          :icon="faFileAlt"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import SideBarContainer from '~/components/organism/SideBar/SideBarContainer.vue'

import Vue from 'vue'
export default Vue.extend({
  components: {
    SideBarContainer,
  },
  data() {
    return {
      sideBarProps: [
        {
          navTitle: 'HOME',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-green-500',
          isLabel: 'true',
        },
        {
          navTitle: 'SETTING',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-green-500',
          isLabel: 'true',
        },
        {
          navTitle: 'PROFILE',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-green-500',
          isLabel: 'true',
        },
      ],
    }
  },
  computed: {
    faFileAlt() {
      return faFileAlt
    },
  },
})
</script>
