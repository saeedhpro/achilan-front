<template>
	<div class="mb-2">

		<label for="ff" class="mb-0.5 w-full block text-gray-500 text-sm select-none">{{ label }}</label>

		<input
			id="ff"
			type="text"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
			:placeholder="label"
			autocomplete="off"
			class="ltr px-2 py-1.5 border shadow-sm block w-full rounded ring-transparent focus:ring-4 focus:ring-opacity-40"
			:class="!$v.value.required || !$v.value.numeric || !$v.value.mustStartWith09 || !$v.value.mustBe11Length
			 ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'"
		/>

		<div class="pt-1">
			<div class="text-xs font-bold text-red-500" v-if="required && !$v.value.required">{{ label }} ضروری است</div>

			<div class="text-xs font-bold text-red-500" v-if="!$v.value.numeric">{{ label }} باید عددی باشد</div>
			<div class="text-xs font-bold text-red-500" v-else-if="!$v.value.mustStartWith09">{{ label }} باید با 09 شروع شود</div>
			<div class="text-xs font-bold text-red-500" v-else-if="!$v.value.mustBe11Length">{{ label }} باید 11 رقم باشد</div>
		</div>

	</div>
</template>

<script>
import {required, numeric} from 'vuelidate/lib/validators'

const mustStartWith09 = (mobile) => {
	if (mobile === '') {
		return true
	} else {
		if (mobile.startsWith('09')) {
			return true
		} else {
			return false
		}
	}
}
const mustBe11Length = (mobile) => {
	if (mobile === '') {
		return true
	} else {
		if (mobile.length === 11) {
			return true
		} else {
			return false
		}
	}
}

export default {
	name: "am-mobile",
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
			required,
			numeric,
			mustStartWith09,
			mustBe11Length
		}
	}
}
</script>