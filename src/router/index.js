import { createRouter, createWebHistory } from "vue-router";
import Ash from "../views/Ash.vue";
import Misty from "../views/Misty.vue";
import Brock from "../views/Brock.vue";

const routes = [
	{
		path: "/ash",
		component: Ash,
	},
	{
		path: "/misty",
		component: Misty,
	},
	{
		path: "/brock",
		component: Brock,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
