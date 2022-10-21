import modulesRoutes from '../routesModules';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getMainModuleRoutes = (baseURL: string) => {
  const url = baseURL !== '' ? `${baseURL}/` : '/';

  return {
    root: `${url}`,
    title: '',
    home: {
      root: `${url}`,
      title: 'Главная',
    },
    product: {
      root: `${url}product`,
      title: 'Товар',
    },
    create: {
      root: `${url}create`,
      title: 'Создание',
    },
    edit: {
      root: `${url}edit`,
      rootParam: `${url}edit/:productId`,
      title: 'Создание',
    },
  };
};

const mainModuleRoutes = getMainModuleRoutes(modulesRoutes['main-module'].root);

export default mainModuleRoutes;
