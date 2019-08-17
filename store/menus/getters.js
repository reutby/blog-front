import {GETTERS, DATA} from './consts';


export default {
  [GETTERS.MAIN_MENU_LINKS]: state => {
    const menu = state[DATA.MAIN_MENU];
    const links = menu ? menu.links : [];
    return links.map(link => {
      if (link.kind === 'category') {
        return {
          name: link.category.name,
          route: {
            name: 'category',
            params: {
              category: link.category.path,
            }
          }
        };
      } else {
        return {
          name: link.post.name,
          route: {
            name: 'category-post',
            params: {
              category: link.post.category.path,
              post: link.post.path,
            }
          }
        }
      }
    });
  }
};
