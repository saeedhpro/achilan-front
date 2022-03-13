<template>
	<div class="mb-2">

		<label for="ff" class="mb-1 w-full block text-gray-500 text-sm select-none">{{ label }}</label>

		<input
			id="ff"
			type="text"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
			:placeholder="label"
			class="px-2 py-1.5 border shadow-sm block w-full rounded ring-transparent focus:ring-4 focus:ring-opacity-40"
			:class="!$v.value.required ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'"
			autocomplete="off"
		/>

		<div class="pt-1">
			<div class="text-xs font-bold text-red-500" v-if="!$v.value.required">{{ label }} ضروری است</div>
		</div>

	</div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'

export default {
	name: "am-string",
	props: {
		value: {
			type: String
		},
		label: {
			type: String,
			required: true
		},
		required: {
			type: Boolean,
			default: false
		}
	},

	validations: {
		value: {
			required: required
		}
	},


	async mounted() {
		await this.$v.$reset
	}
}
</script>