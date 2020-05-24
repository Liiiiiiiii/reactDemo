const MenuConfig = {
    menu: [
        {
            key: "用户管理",
            name: "用户管理",
            icon: "user",
            children: [
              {
                key: "/index/index1",
                name: "用户管理"
              },
              {
                key: "/index/index2",
                name: "部门设置"
              },
              {
                key: "/index/index3",
                name: "二级部门设置"
              }
            ]
          }
    ]
}

export default MenuConfig;