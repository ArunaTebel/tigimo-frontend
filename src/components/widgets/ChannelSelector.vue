<template>
  <div class="w-72">
    <Combobox v-model="selected">
      <div class="relative mt-1">
        <div
            class="relative w-full cursor-default overflow-hidden bg-white text-left shadow-md sm:text-sm"
        >
          <ComboboxInput
              class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              :displayValue="(channel) => channel.name"
              @change="query = $event.target.value"
          />
          <ComboboxButton
              class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
          </ComboboxButton>
        </div>
        <TransitionRoot
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            @after-leave="query = ''"
        >
          <ComboboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <div
                v-if="filteredChannels.length === 0 && query !== ''"
                class="relative cursor-default select-none py-2 px-4 text-gray-700"
            >
              No channels found.
            </div>

            <ComboboxOption
                v-for="channel in filteredChannels"
                as="template"
                :key="channel._id"
                :value="channel"
                v-slot="{ selected, active }"
                @click="onOptionSelect"
            >
              <li
                  class="relative cursor-default select-none py-2 pl-10 pr-4"
                  :class="{
                  'bg-teal-600 text-white': active,
                  'text-gray-900': !active,
                }"
              >
                <span
                    class="block truncate"
                    :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ channel.name }}
                </span>
                <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                    :class="{ 'text-white': active, 'text-teal-600': !active }"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<script>
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import {CheckIcon, SelectorIcon} from '@heroicons/vue/solid'
import WS from "../../lib/WebService";

export default {
  components: {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
    CheckIcon,
    SelectorIcon
  },
  data: () => ({
    query: '',
    channels: [],
    selected: {}
  }),
  created() {
    this.fetchData()
  },
  computed: {
    filteredChannels() {
      const q = this.query
      return q.value === ''
          ? this.channels
          : this.channels.filter(function (channel) {
                return channel.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(q.toLowerCase().replace(/\s+/g, ''))
              }
          )
    }
  },
  methods: {
    async fetchData() {
      this.channels = await WS.models.channels.fetchAll()
    },
    async onOptionSelect(event) {
      console.log(this.selected.name)
    }

  }
}
</script>
