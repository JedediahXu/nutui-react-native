// 基础组件
import ButtonDemo from '@nutui/nutui-react-native/button/demo'
import CellDemo from '@nutui/nutui-react-native/cell/demo'
import IconDemo from '@nutui/nutui-react-native/icon/demo'
// 导航组件
import NavBarDemo from '@nutui/nutui-react-native/navbar/demo'
// 反馈组件
import ActionSheetDemo from '@nutui/nutui-react-native/actionsheet/demo'
import BackTopDemo from '@nutui/nutui-react-native/backtop/demo'
import ToastDemo from '@nutui/nutui-react-native/toast/demo'
// 展示组件
import AvatarDemo from '@nutui/nutui-react-native/avatar/demo'

export const DemoList = [{
  title: 'Button',
  description: '按钮',
  demo: ButtonDemo,
  type: 'Basic'
},
{
  title: 'Cell',
  description: '单元格',
  demo: CellDemo,
  type: 'Basic'
},
{
  title: 'Icon',
  description: '图标',
  demo: IconDemo,
  type: 'Basic'
},
{
  title: 'NavBar',
  description: '导航栏',
  demo: NavBarDemo,
  type: 'Nav'
},
{
  title: 'ActionSheet',
  description: '动作面板',
  demo: ActionSheetDemo,
  type: 'Feedback'
},
{
  title: 'BackTop',
  description: '回到顶部',
  demo: BackTopDemo,
  type: 'Feedback'
},
{
  title: 'Toast',
  description: '吐司',
  demo: ToastDemo,
  type: 'Feedback'
},
{
  title: 'Avatar',
  description: '头像',
  demo: AvatarDemo,
  type: 'Exhibition'
}
]

export const CategoryList = [{
  title: 'Basic',
  description: '基础组件',
}, {
  title: 'Layout',
  description: '布局组件',
}, {
  title: 'Dentry',
  description: '录入组件',
}, {
  title: 'Feedback',
  description: '反馈组件',
}, {
  title: 'Nav',
  description: '导航组件',
}, {
  title: 'Exhibition',
  description: '展示组件',
}, {
  title: 'Business',
  description: '特色组件',
}]
