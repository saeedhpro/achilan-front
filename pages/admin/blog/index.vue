<template xmlns="http://www.w3.org/1999/html">
	<div class="h-screen bg-[#F7F8FA]">
		<div class="mx-auto py-6 px-5 max-w-7xl">

			<!-- Header -->
			<div class="py-6">
				<nuxt-link class="py-3 flex justify-center items-center bg-[#4B1752] text-white font-bold rounded hover:bg-[#2C0531]" to="/admin/blog/create">

					<svg width="36px" height="36px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-4 w-4"
						 preserveAspectRatio="xMidYMid meet">
						<path fill="white" d="M31 15H21V5a3 3 0 1 0-6 0v10H5a3 3 0 1 0 0 6h10v10a3 3 0 1 0 6 0V21h10a3 3 0 1 0 0-6z"></path>
					</svg>
					<p class="pr-2">ایجاد مقاله</p>

				</nuxt-link>
			</div>

			<!-- Body -->
			<div class="border border-gray-200 rounded overflow-x-auto min-w-full bg-white">
				<!-- Bordered Table -->
				<table class="min-w-full text-sm align-middle whitespace-nowrap">
					<!-- Table Header -->
					<thead>
					<tr class="border-b border-gray-200 bg-[#4B1752]">
						<th class="p-3 text-white font-bold text-sm text-center">شناسه</th>
						<th class="p-3 text-white font-bold text-sm">عکس مقاله</th>
						<th class="p-3 text-white font-bold text-sm">عنوان مقاله</th>
						<th class="p-3 text-white font-bold text-sm">دسته بندی</th>
						<th class="p-3 text-white font-bold text-sm">زمان انتشار</th>
						<th class="p-3 text-white font-bold text-sm">عملیات</th>
					</tr>
					</thead>
					<!-- END Table Header -->

					<!-- Table Body -->
					<tbody v-for="(item, index) in articlesList" :key="index">
					<!--modal fo edit product-->
					<!--          <div v-if="editModal" class="top-36 w-full flex justify-center absolute rounded z-20" v-cloak>-->

					<!--            &lt;!&ndash;ویرایش محصول&ndash;&gt;-->

					<!--          </div>-->

					<!--modal for delete product-->
					<!--          <div v-if="deleteModal" class="top-36 w-full flex justify-center absolute rounded z-20" v-cloak>-->

					<!--            <div class="p-4">-->

					<!--              <div>-->

					<!--              </div>-->

					<!--            </div>-->

					<!--          </div>-->

					<tr class="border-b border-gray-200 hover:bg-gray-50" @click="">
						<td class="p-3 text-center">
							<p class="font-medium">
								{{ item.id }}
							</p>
						</td>
						<td class="p-3 text-center">
							<img class="mx-auto w-20 h-20 rounded-lg" v-if="item.thumbnail" :src="item.thumbnail" :alt="item.title"/>
						</td>
						<td class="p-3 text-gray-500 text-center">
							{{ item.title }}
						</td>
						<td class="p-3 text-gray-500 text-center">
							{{ item.category.name }}
						</td>
						<td class="p-3 text-gray-500 text-center">
							{{ item.created_at }}
						</td>


						<td class="p-3 space-x-2 space-x-reverse text-center">

							<div v-if="editModal" @click="editModal = true" v-cloak
								 class="fixed inset-0 bg-gray-400 bg-opacity-20 z-10"></div>

							<nuxt-link :to="`/admin/blog/edit/${item.id}`" type="button" v-cloak
									   class="px-2 py-1 inline-flex justify-center items-center space-x-1 space-x-reverse border bg-yellow-100 font-bold leading-5 text-sm rounded border-[#fbbf24] bg-white text-[#fbbf24] shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25">
								<svg class="hi-solid hi-pencil inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
								</svg>
								<span>ویرایش</span>
							</nuxt-link>

							<button type="button" @click="deleteArticle(item)" v-cloak
									class="inline-flex justify-center items-center space-x-2 space-x-reverse border bg-red-100 text-red-600 font-bold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-red-600 bg-white shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25">
								<ico-trash/>
								<span class="pl-2">حذف</span>
							</button>

						</td>
					</tr>

					</tbody>
					<!-- END Table Body -->
				</table>
				<!-- END Bordered Table -->
			</div>


			<div v-if="deleteModal" @click="deleteModal = false" v-cloak
				 class="fixed inset-0 bg-gray-400 bg-opacity-20 z-10"></div>


			<!--      <div class="relative bg-white rounded-lg shadow-lg">-->
			<!--    <TableAdmin>-->
			<!--      <div slot="head-name">لیست مقالات</div>-->
			<!--      <div slot="head1">ردیف</div>-->
			<!--      <div slot="head2">عکس مقاله</div>-->
			<!--      <div slot="head3">عنوان مقاله</div>-->
			<!--&lt;!&ndash;      <div slot="head4">نویسنده</div>&ndash;&gt;-->
			<!--      <div slot="head5">دسته بندی</div>-->
			<!--      <div slot="head6">زمان انتشار</div>-->
			<!--      <div slot="head7">عملیات</div>-->
			<!--    </TableAdmin>-->
			<!--  <div v-for="(item, index) in articlesList" :key="index" class="my-8 px-10 pb-5 flex justify-between border-b-2 border-gray-400 border-dashed">-->
			<!--    <div class="text-black text-sm">{{index + 1}}</div>-->
			<!--    <div class="text-black text-sm">-->
			<!--      <img class="w-20 h-20 rounded-lg" v-if="item.thumbnail" :src="item.thumbnail"/>-->
			<!--    </div>-->
			<!--    <div class="text-black text-sm">{{item.title}}</div>-->
			<!--&lt;!&ndash;    <div class="text-black text-sm">{{item.user.first_name}}  {{item.user.last_name}}</div>&ndash;&gt;-->
			<!--    <div class="text-black text-sm">{{item.category.name}}</div>-->
			<!--    <div class="text-black text-sm">{{item.created_at}}</div>-->
			<!--&lt;!&ndash;    <div class="text-black text-sm ">&ndash;&gt;-->
			<!--&lt;!&ndash;      <span @click="deleteArticle(item.id)"><i class="fal fa-trash-alt mr-3"></i></span>&ndash;&gt;-->
			<!--&lt;!&ndash;      <nuxt-link :to="`/blog/${item.id}`"  ><i class="fal fa-eye mx-3"></i></nuxt-link>&ndash;&gt;-->
			<!--&lt;!&ndash;      <nuxt-link :to="`/admin/Article/edit/${item.id}`" style="cursor: pointer">&ndash;&gt;-->
			<!--&lt;!&ndash;            <i class="fal fa-edit" ></i>&ndash;&gt;-->
			<!--&lt;!&ndash;      </nuxt-link>&ndash;&gt;-->
			<!--&lt;!&ndash;    </div>&ndash;&gt;-->
			<!--  </div>-->
			<!--</div>-->
		</div>
	</div>
</template>

<script>
import TableAdmin from "../../../components/admin/TableAdmin";
import IcoTrash from "~/components/icons/ico-trash";

export default {
	name: "index",
	components: {IcoTrash, TableAdmin},
	layout: 'admin',
	// middleware:'admin',

	data() {
		return {
			editModal: false,
			deleteModal: false
		}
	},

	computed: {
		articlesList() {
			return this.$store.getters['latestArticles/getArticles']
		}
	},

	async mounted() {
		await this.get_article()
	},

	methods: {
		async get_article() {
			await this.$store.dispatch('latestArticles/getArticles')
		},

		deleteArticle(item) {

			this.$swal({
				text: 'آیا از حذف ' + item.title + ' اطمینان دارید؟',
				icon: "warning",
				buttons: ["خیر، انصراف", "بله حذف کن"],
				dangerMode: true,
			})
				.then((willDelete) => {
					if (willDelete) {

						this.$store.dispatch('latestArticles/deleteArticle', item.id)
							.then(async res => {
								await this.get_article()

								await this.$swal({
									text: "مقاله با موفقیت حذف شد..!",
									icon: "success",
									buttons: [null, "بسیار خب"]
								});
							});

					}
				});
		}
	},
}
</script>
