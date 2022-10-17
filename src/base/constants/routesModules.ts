export const getModulesRoutes = (baseURL: string) => {
	const url = baseURL !== '' ? `${baseURL}/` : '';
	return ({
		root: `/${url}`,
		title: 'Main',
		'main-module': {
			root: `${url}`,
			title: 'Main module',
		},
	});
};

const modulesRoutes = getModulesRoutes('');

export default modulesRoutes;
