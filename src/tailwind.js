import { usePassThrough } from 'primevue/passthrough'
import Tailwind from 'primevue/passthrough/tailwind'

const CustomTailwind = usePassThrough(
  Tailwind,
  {
    button: {
      root: {
        class: 'text-sm font-semibold bg-primary-600'
      }
    },
    card: {
      root: {
        class: 'shadow-none'
      },
      body: {
        class: 'py-0'
      },
      content: {
        class: 'py-2'
      }
    },
    inputtext: {
      root: {
        class: 'font-primary px-3 py-1 text-base'
      }
    },
    selectbutton: {
      root: {
        class: 'text-sm'
      },
      button: ({ context }) => ({
        class: `text-primary-800 hover:bg-gray-300 ${
          context.active ? '!text-primary-600 bg-gray-100 border-gray-300' : ''
        }`
      })
    }
  },
  {
    mergeProps: true,
    mergeSections: true
  }
)

export default CustomTailwind
