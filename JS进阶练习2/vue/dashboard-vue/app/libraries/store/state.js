import { axios, storage } from '../utils'

const state = {
  /**
   * 客户端会话信息
   * @type {Object}
   * TODO: storage - local or session
   */
  session: storage.get('wedn_net_session_info') || {},

  /**
   * 顶部工具栏
   * @type {Object}
   */
  header: {
    /**
     * 站点名称
     * @type {String}
     */
    name: 'WEDN.NET',

    /**
     * 顶部菜单
     * @type {Array}
     */
    menus: [
      {
        text: '0',
        icon: 'bubble',
        name: 'comments'
      },
      {
        text: '新建',
        icon: 'plus',
        name: 'new',
        params: { type: 'blog' },
        children: [
          { text: '文章', name: 'new', params: { type: 'blog' } },
          { text: '媒体', name: 'upload' },
          { text: '页面', name: 'new', params: { type: 'page' } },
          { text: '用户', name: 'users' }
        ]
      },
      // Component Pages
      {
        text: '组件',
        icon: 'lab',
        name: 'components',
        children: [
          { text: 'Icons', name: 'components-icons' },
          { text: 'Button', name: 'components-button' },
          { text: 'Table', name: 'components-table' }
        ]
      },
      // Demo Pages
      {
        text: '演示',
        icon: 'magic-wand',
        name: 'demo',
        children: [
          { text: 'Data', name: 'demo-data' },
          { text: 'Params', name: 'demo-params', params: { name: '汪磊' } },
          { text: 'Vuex', name: 'demo-vuex' },
          { text: 'I18n', name: 'demo-i18n' },
          { divider: true },
          { text: 'Proxy', name: 'demo-proxy' },
          { text: 'CORS', name: 'demo-cors' },
          { divider: true },
          { text: 'NotFound', path: '/hello-world' }
        ]
      }
    ]
  },

  /**
   * 侧边导航栏
   * @type {Object}
   */
  sidebar: {
    /**
     * 版权所属
     * @type {String}
     */
    copyright: 'WEDN.NET',

    /**
     * 是否收起边栏
     * @type {Boolean}
     */
    collapse: storage.get('wedn_net_sidebar_collapse'),

    /**
     * 侧边菜单
     * @type {Array}
     */
    menus: [
      {
        title: 'Actions'
      },
      {
        text: '仪表盘',
        icon: 'meter',
        name: 'dashboard',
        children: [
          { text: '首页', name: 'dashboard' },
          { text: '更新', name: 'update' }
        ]
      },
      {
        divider: true
      },
      {
        text: '文章',
        icon: 'pushpin',
        name: 'posts',
        params: { type: 'blog' },
        children: [
          { text: '所有文章', name: 'posts', params: { type: 'blog' } },
          { text: '写文章', name: 'new', params: { type: 'blog' } },
          { text: '分类目录', name: 'terms', params: { type: 'blog-category' } },
          { text: '标签', name: 'terms', params: { type: 'blog-tag' } }
        ]
      },
      {
        text: '页面',
        icon: 'newspaper',
        name: 'posts',
        params: { type: 'page' },
        children: [
          { text: '所有页面', name: 'posts', params: { type: 'page' } },
          { text: '新建页面', name: 'new', params: { type: 'page' } }
        ]
      },
      {
        text: '多媒体',
        icon: 'images',
        name: 'media',
        children: [
          { text: '媒体库', name: 'media' },
          { text: '添加', name: 'upload' }
        ]
      },
      {
        divider: true
      },
      {
        text: '用户',
        icon: 'users',
        name: 'users',
        children: [
          { text: '所有用户', name: 'users' },
          { text: '角色', name: 'roles' },
          { text: '权限', name: 'permissions' }
        ]
      },
      {
        text: '评论',
        icon: 'bubbles',
        name: 'comments'
      },
      {
        divider: true
      },
      {
        text: '外观',
        icon: 'paint-format',
        name: 'themes',
        children: [
          { text: '主题', name: 'themes' },
          { text: '自定义', name: 'customize' },
          { text: '小工具', name: 'widgets' },
          { text: '菜单', name: 'navigation' }
        ]
      },
      {
        text: '插件',
        icon: 'power-cord',
        name: 'plugins',
        children: [
          { text: '已安装插件', name: 'plugins' },
          { text: '安装插件', name: 'install', params: { type: 'plugin' } }
        ]
      },
      {
        text: '工具',
        icon: 'wrench',
        name: 'tools',
        children: [
          { text: '可用工具', name: 'tools' },
          { text: '导入', name: 'import' },
          { text: '导出', name: 'export' }
        ]
      },
      {
        text: '设置',
        icon: 'equalizer',
        name: 'options',
        params: { type: 'general' },
        children: [
          { text: '常规', name: 'options', params: { type: 'general' } },
          { divider: true },
          { text: '撰写', name: 'options', params: { type: 'writing' } },
          { text: '阅读', name: 'options', params: { type: 'reading' } },
          { text: '讨论', name: 'options', params: { type: 'discussion' } },
          { text: '多媒体', name: 'options', params: { type: 'media' } },
          { text: '固定链接', name: 'options', params: { type: 'permalink' } }
        ]
      }
    ]
  },

  // ==================== DEMO ====================

  /**
   * 计数器
   * @type {Number}
   */
  count: storage.get('wedn_net_demo_count') || 0
}

if (state.session && state.session.token) {
  // init axios headers
  axios.defaults.headers.Authorization = `Bearer ${state.session.token}`
}

export default state
