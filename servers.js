let data = [
  {
    item_id: "61791a1f-9410-42ee-8be1-0650b3bf2e97",
    example: [
      {
        request: {
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "name": "coderwhy",\n    "password": "123456"\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/login",
          urlObject: {
            path: ["login"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "用户登录",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location -g \'{{baseURL}}/login\' \\\n--data \'{\n    "name": "coderwhy",\n    "password": "123456"\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "108e35b2-b26e-46d6-a343-87ccd26b2008",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL}}/test",
          urlObject: {
            path: ["test"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "验证登录",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/test'",
          },
        },
      },
    ],
  },
  {
    item_id: "d9a05b69-4330-4313-9497-b16c306e42cb",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "name": "james",\n    "realname": "詹姆斯",\n    "password": "123456",\n    "cellphone": 13322223338,\n    "departmentId": 1,\n    "roleId": 1\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/users",
          urlObject: {
            path: ["users"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "创建用户",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location -g \'{{baseURL}}/users\' \\\n--data \'{\n    "name": "james",\n    "realname": "詹姆斯",\n    "password": "123456",\n    "cellphone": 13322223338,\n    "departmentId": 1,\n    "roleId": 1\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "cc5207d2-7161-44ad-8ef6-48499bd32ee6",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "DELETE",
          header: [],
          url: "{{baseURL}}/users/4",
          urlObject: {
            path: ["users", "4"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "删除用户",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g --request DELETE '{{baseURL}}/users/4'",
          },
        },
      },
    ],
  },
  {
    item_id: "2ee08e48-df77-463f-8a76-8224973023ba",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "PATCH",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "password": "12345",\n    "cellphone": "15566668888"\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/users/3",
          urlObject: {
            path: ["users", "3"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "修改用户",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location -g --request PATCH \'{{baseURL}}/users/3\' \\\n--data \'{\n    "password": "12345",\n    "cellphone": "15566668888"\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "449e396d-8052-4245-83ac-dfc33fe1812c",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL}}/users/1",
          urlObject: {
            path: ["users", "1"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "查询某个用户",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/users/1'",
          },
        },
      },
    ],
  },
  {
    item_id: "fc2c4037-c89c-4385-a6ce-909019f911fb",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "<token>",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "offset": 0,\n    "size": 10,\n    "name": "w",\n    "cellphone": 4\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/users/list",
          urlObject: {
            path: ["users", "list"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "查询用户列表",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location -g \'{{baseURL}}/users/list\' \\\n--data \'{\n    "offset": 0,\n    "size": 10,\n    "name": "w",\n    "cellphone": 4\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "ad7ace34-5385-45db-ac66-5afefc395edc",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "name": "人事部",\n    "parentId": 1,\n    "leader": "coderwhy"\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/department",
          urlObject: {
            path: ["department"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "创建部门",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location -g \'{{baseURL}}/department\' \\\n--data \'{\n    "name": "人事部",\n    "parentId": 1,\n    "leader": "coderwhy"\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "7f06bd2c-ac55-4dd8-a91c-40e6d2be5f54",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "DELETE",
          header: [],
          url: "{{baseURL}}/department/11",
          urlObject: {
            path: ["department", "11"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "删除部门",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g --request DELETE '{{baseURL}}/department/11'",
          },
        },
      },
    ],
  },
  {
    item_id: "f0c18d7d-6f74-4697-b9c8-cb7bb2b92f8f",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "PATCH",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "leader": "lily",\n    "parentId": 2\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/department/4",
          urlObject: {
            path: ["department", "4"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "更新部门",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location -g --request PATCH \'{{baseURL}}/department/4\' \\\n--data \'{\n    "leader": "lily",\n    "parentId": 2\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "85bb57e0-8258-49b7-9fed-6b5ce45ac52a",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL}}/department/4",
          urlObject: {
            path: ["department", "4"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "获取某个部门",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/department/4'",
          },
        },
      },
    ],
  },
  {
    item_id: "c965da49-8c54-4c6b-8c6f-678e6cdbe08f",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "offset": 0,\n    "size": 2\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/department/list",
          urlObject: {
            path: ["department", "list"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "获取部门列表",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/department/list' \\\n--data '{\n    \"offset\": 0,\n    \"size\": 2\n}'",
          },
        },
      },
    ],
  },
  {
    item_id: "1f1fffc1-9c2c-466f-91d6-8305dbe236a0",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "name": "运营2",\n    "intro": "日常管理2",\n    "menuList": [1, 9, 38, 41, 2, 3, 4, 25, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23, 24, 15, 16, 30, 31, 32, 33, 34, 35, 36, 37, 26, 27, 28, 29, 39, 40, 42, 43]\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "http://152.136.185.210:4000/role",
          urlObject: {
            protocol: "http",
            port: "4000",
            path: ["role"],
            host: ["152", "136", "185", "210"],
            query: [],
            variable: [],
          },
        },
        name: "创建角色",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location \'http://152.136.185.210:4000/role\' \\\n--data \'{\n    "name": "运营2",\n    "intro": "日常管理2",\n    "menuList": [1, 9, 38, 41, 2, 3, 4, 25, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23, 24, 15, 16, 30, 31, 32, 33, 34, 35, 36, 37, 26, 27, 28, 29, 39, 40, 42, 43]\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "36219406-ff37-4c95-a6fd-b178b7b9a014",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "DELETE",
          header: [],
          body: {
            mode: "raw",
            raw: "",
            options: {
              raw: {
                language: "text",
              },
            },
          },
          url: "{{baseURL}}/role/2",
          urlObject: {
            path: ["role", "2"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "删除角色",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g --request DELETE '{{baseURL}}/role/2' \\\n--data ''",
          },
        },
      },
    ],
  },
  {
    item_id: "4090c797-eeab-431b-b0b6-e71415906a53",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "PATCH",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "intro": "日常事务"\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/role/3",
          urlObject: {
            path: ["role", "3"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "更新角色",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g --request PATCH '{{baseURL}}/role/3' \\\n--data '{\n    \"intro\": \"日常事务\"\n}'",
          },
        },
      },
    ],
  },
  {
    item_id: "23ed7bfe-bd42-4c0d-8a28-c1e4f03bc541",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL}}/role/1",
          urlObject: {
            path: ["role", "1"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "获取某个角色",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/role/1'",
          },
        },
      },
    ],
  },
  {
    item_id: "c7cfe861-a35d-4da9-a78f-30075574fd69",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "offset": 0,\n    "size": 100\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/role/list",
          urlObject: {
            path: ["role", "list"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "获取角色列表",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/role/list' \\\n--data '{\n    \"offset\": 0,\n    \"size\": 100\n}'",
          },
        },
      },
    ],
  },
  {
    item_id: "2b2c3d5e-863e-44f2-bc2b-bbdc98e7d44c",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "name": "商品信息",\n    "type": 2,\n    "url": "/product/goods",\n    "sort": 104,\n    "parentId": 9\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/menu",
          urlObject: {
            path: ["menu"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "创建菜单",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location -g \'{{baseURL}}/menu\' \\\n--data \'{\n    "name": "商品信息",\n    "type": 2,\n    "url": "/product/goods",\n    "sort": 104,\n    "parentId": 9\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "39336e87-a11f-4cea-ad97-7e0d7bd09058",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "DELETE",
          header: [],
          url: "{{baseURL}}/menu/43",
          urlObject: {
            path: ["menu", "43"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "删除菜单",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g --request DELETE '{{baseURL}}/menu/43'",
          },
        },
      },
    ],
  },
  {
    item_id: "70bcc337-ff30-4925-b1d3-54474602cd54",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "PATCH",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "name": "test测试",\n    "url": "/demo"\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/menu/43",
          urlObject: {
            path: ["menu", "43"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "修改菜单",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location -g --request PATCH \'{{baseURL}}/menu/43\' \\\n--data \'{\n    "name": "test测试",\n    "url": "/demo"\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "56e869b5-6df1-4b2a-8775-814efc648c11",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL}}/menu/1",
          urlObject: {
            path: ["menu", "1"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "查询某个菜单",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/menu/1'",
          },
        },
      },
    ],
  },
  {
    item_id: "0bc177bd-3267-46d8-8683-1acad5f89579",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          url: "{{baseURL}}/menu/list",
          urlObject: {
            path: ["menu", "list"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "查询菜单列表",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g --request POST '{{baseURL}}/menu/list'",
          },
        },
      },
    ],
  },
  {
    item_id: "e95e1161-d271-45a4-bad6-da999cce7240",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "PATCH",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "name": "aaa",\n    "oldPrice": 100,\n    "newPrice": 88,\n    "desc": "cba",\n    "status": 1,\n    "imgUrl": "www.itsiyuan.com/abc.png",\n    "inventoryCount": 100,\n    "saleCount": 100,\n    "favorCount": 199,\n    "address": "北京"\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/goods",
          urlObject: {
            path: ["goods"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "创建商品",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location -g --request PATCH \'{{baseURL}}/goods\' \\\n--data \'{\n    "name": "aaa",\n    "oldPrice": 100,\n    "newPrice": 88,\n    "desc": "cba",\n    "status": 1,\n    "imgUrl": "www.itsiyuan.com/abc.png",\n    "inventoryCount": 100,\n    "saleCount": 100,\n    "favorCount": 199,\n    "address": "北京"\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "f73e7572-7c26-4fa4-8ed6-ba4d59842d6e",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "DELETE",
          header: [],
          body: {
            mode: "raw",
            raw: "",
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/goods/282",
          urlObject: {
            path: ["goods", "282"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "删除商品",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g --request DELETE '{{baseURL}}/goods/282' \\\n--data ''",
          },
        },
      },
    ],
  },
  {
    item_id: "7fd68c64-a2a0-42ac-ad12-4a783155fb5b",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "PATCH",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "name": "code",\n    "newPrice": 90\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/goods/1",
          urlObject: {
            path: ["goods", "1"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "修改商品",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location -g --request PATCH \'{{baseURL}}/goods/1\' \\\n--data \'{\n    "name": "code",\n    "newPrice": 90\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "e58886cc-d73c-4034-b5b6-2d736f23a1a2",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL}}/goods/1",
          urlObject: {
            path: ["goods", "1"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "获取单个商品",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/goods/1'",
          },
        },
      },
    ],
  },
  {
    item_id: "63b77a76-3dd7-49c5-8fb3-f1c090fb813d",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          url: "{{baseURL}}/goods/list",
          urlObject: {
            path: ["goods", "list"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "获取商品列表",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g --request POST '{{baseURL}}/goods/list'",
          },
        },
      },
    ],
  },
  {
    item_id: "0521c509-876a-4289-a1ad-1c94071e502f",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "name": "床上用品"\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/category",
          urlObject: {
            path: ["category"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "创建类别",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/category' \\\n--data '{\n    \"name\": \"床上用品\"\n}'",
          },
        },
      },
    ],
  },
  {
    item_id: "a06a04c0-95c8-4400-9488-657be5fedf54",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "DELETE",
          header: [],
          url: "{{baseURL}}/category/1",
          urlObject: {
            path: ["category", "1"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "删除类别",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g --request DELETE '{{baseURL}}/category/1'",
          },
        },
      },
    ],
  },
  {
    item_id: "47b4df99-86ac-428b-8aac-95ae856ad16c",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "PATCH",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "name": "生活用品"\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/category/1",
          urlObject: {
            path: ["category", "1"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "更新类别",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g --request PATCH '{{baseURL}}/category/1' \\\n--data '{\n    \"name\": \"生活用品\"\n}'",
          },
        },
      },
    ],
  },
  {
    item_id: "fc142f6c-846f-422f-ac0b-02d518bc95b1",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL}}/category/1",
          urlObject: {
            path: ["category", "1"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "获取单个类别",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/category/1'",
          },
        },
      },
    ],
  },
  {
    item_id: "db927b0a-b28e-4e8c-9af5-75817c9a8c4d",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "offset": 0,\n    "size": 3,\n    "name": "子"\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/category/list",
          urlObject: {
            path: ["category", "list"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "获取类别列表",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location -g \'{{baseURL}}/category/list\' \\\n--data \'{\n    "offset": 0,\n    "size": 3,\n    "name": "子"\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "cd7922e1-2719-4a94-aca2-9950b53492d9",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "title": "我与地坛",\n    "content": "宇宙以其不息的欲望将一个歌舞炼为永恒。这欲望有怎样一个人间的姓名，大可忽略不计。"\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/story",
          urlObject: {
            path: ["story"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "你的故事",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: 'curl --location -g \'{{baseURL}}/story\' \\\n--data \'{\n    "title": "我与地坛",\n    "content": "宇宙以其不息的欲望将一个歌舞炼为永恒。这欲望有怎样一个人间的姓名，大可忽略不计。"\n}\'',
          },
        },
      },
    ],
  },
  {
    item_id: "62a85dc5-9d55-4f51-9eb7-f49e04da540e",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "<token>",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: "",
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/story/list",
          urlObject: {
            path: ["story", "list"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "故事列表",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g --request POST '{{baseURL}}/story/list' \\\n--data ''",
          },
        },
      },
    ],
  },
  {
    item_id: "0d08fa84-4f39-47b4-9a2f-c660b4525fea",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "<token>",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          url: "{{baseURL}}/menu/list",
          urlObject: {
            path: ["menu", "list"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "查询完整菜单树",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g --request POST '{{baseURL}}/menu/list'",
          },
        },
      },
    ],
  },
  {
    item_id: "30a20ae0-43b7-4efa-9778-15f42a35fabc",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL}}/role/4/menu",
          urlObject: {
            path: ["role", "4", "menu"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "查询角色菜单树",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/role/4/menu'",
          },
        },
      },
    ],
  },
  {
    item_id: "136a98b0-2e45-4746-b417-eb1bf3b9076d",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL}}/role/4/menuIds",
          urlObject: {
            path: ["role", "4", "menuIds"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "查询角色菜单ids",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/role/4/menuIds'",
          },
        },
      },
    ],
  },
  {
    item_id: "16c3d751-a059-4de5-b44d-712b1b73a2d4",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "roleId": 1,\n    "menuList": [1, 9, 38, 41, 2, 3, 4, 25, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23, 24, 15, 16, 30, 31, 32, 33, 34, 35, 36, 37, 26, 27, 28, 29, 39, 40, 42, 43]\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: "{{baseURL}}/role/assign",
          urlObject: {
            path: ["role", "assign"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "给角色分配权限",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/role/assign' \\\n--data '{\n    \"roleId\": 1,\n    \"menuList\": [1, 9, 38, 41, 2, 3, 4, 25, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23, 24, 15, 16, 30, 31, 32, 33, 34, 35, 36, 37, 26, 27, 28, 29, 39, 40, 42, 43]\n}'",
          },
        },
      },
    ],
  },
  {
    item_id: "97ec4401-b4db-4f7b-8e47-00291a89c9c7",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL}}/goods/category/count",
          urlObject: {
            path: ["goods", "category", "count"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "每个分类商品的个数",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/goods/category/count'",
          },
        },
      },
    ],
  },
  {
    item_id: "07e2e146-cc71-448b-99bb-f998ddec10c0",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL2}}/goods/category/sale",
          urlObject: {
            path: ["goods", "category", "sale"],
            host: ["{{baseURL2}}"],
            query: [],
            variable: [],
          },
        },
        name: "每个分类商品的销量",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL2}}/goods/category/sale'",
          },
        },
      },
    ],
  },
  {
    item_id: "585421fd-34c1-470e-9947-4e5a0e227c28",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL2}}/goods/category/favor",
          urlObject: {
            path: ["goods", "category", "favor"],
            host: ["{{baseURL2}}"],
            query: [],
            variable: [],
          },
        },
        name: "每个分类商品的收藏",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL2}}/goods/category/favor'",
          },
        },
      },
    ],
  },
  {
    item_id: "59f3ed85-fc77-49c7-9bc0-ecfe2105651c",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL2}}/goods/sale/top10",
          urlObject: {
            path: ["goods", "sale", "top10"],
            host: ["{{baseURL2}}"],
            query: [],
            variable: [],
          },
        },
        name: "销量前10的商品数量",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL2}}/goods/sale/top10'",
          },
        },
      },
    ],
  },
  {
    item_id: "d1c20d25-4687-474a-a1b8-024ab24d04a3",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL2}}/goods/address/sale",
          urlObject: {
            path: ["goods", "address", "sale"],
            host: ["{{baseURL2}}"],
            query: [],
            variable: [],
          },
        },
        name: "不同城市的销量数据",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL2}}/goods/address/sale'",
          },
        },
      },
    ],
  },
  {
    item_id: "f0c2fd1a-3e85-4e9a-9ba3-7af38b977ecd",
    example: [
      {
        request: {
          auth: {
            type: "bearer",
            bearer: {
              token: "{{token}}",
            },
            isInherited: false,
          },
          method: "GET",
          header: [],
          url: "{{baseURL}}/goods/amount/list",
          urlObject: {
            path: ["goods", "amount", "list"],
            host: ["{{baseURL}}"],
            query: [],
            variable: [],
          },
        },
        name: "商品数据统计的数量",
        response: {
          body: "",
        },
        snippet: {
          curl: {
            cURL: "curl --location -g '{{baseURL}}/goods/amount/list'",
          },
        },
      },
    ],
  },
];

let filterData = data.map((el) => {
  return (
    el.example[0].request.method +
    "---" +
    el.example[0].name +
    "---" +
    el.example[0].request.url +
    (el.example[0].request.method == "POST"
      ? "---" +
        el.example[0].request.body?.raw
          .replaceAll("\n", "")
          .replaceAll(" ", "")
          .replaceAll("  ", "")
          .replaceAll("   ", "")
      : "")
  );
});

console.log(filterData);

const d = [
  'POST---用户登录---{{baseURL}}/login---{"name":"coderwhy","password":"123456"}',
  "GET---验证登录---{{baseURL}}/test",
  "--",
  'POST---创建用户---{{baseURL}}/users---{"name":"james","realname":"詹姆斯","password":"123456","cellphone":13322223338,"departmentId":1,"roleId":1}',
  "DELETE---删除用户---{{baseURL}}/users/4",
  "PATCH---修改用户---{{baseURL}}/users/3",
  "GET---查询某个用户---{{baseURL}}/users/1",
  'POST---查询用户列表---{{baseURL}}/users/list---{"offset":0,"size":10,"name":"w","cellphone":4}',
  "--",
  'POST---创建部门---{{baseURL}}/department---{"name":"人事部","parentId":1,"leader":"coderwhy"}',
  "DELETE---删除部门---{{baseURL}}/department/11",
  "PATCH---更新部门---{{baseURL}}/department/4",
  "GET---获取某个部门---{{baseURL}}/department/4",
  'POST---获取部门列表---{{baseURL}}/department/list---{"offset":0,"size":2}',
  "--",
  'POST---创建角色---http://152.136.185.210:4000/role---{"name":"运营2","intro":"日常管理2","menuList":[1,9,38,41,2,3,4,25,5,6,7,8,17,18,19,20,21,22,23,24,15,16,30,31,32,33,34,35,36,37,26,27,28,29,39,40,42,43]}',
  "DELETE---删除角色---{{baseURL}}/role/2",
  "PATCH---更新角色---{{baseURL}}/role/3",
  "GET---获取某个角色---{{baseURL}}/role/1",
  'POST---获取角色列表---{{baseURL}}/role/list---{"offset":0,"size":100}',
  "--",
  'POST---创建菜单---{{baseURL}}/menu---{"name":"商品信息","type":2,"url":"/product/goods","sort":104,"parentId":9}',
  "DELETE---删除菜单---{{baseURL}}/menu/43",
  "PATCH---修改菜单---{{baseURL}}/menu/43",
  "GET---查询某个菜单---{{baseURL}}/menu/1",
  "POST---查询菜单列表---{{baseURL}}/menu/list---undefined",
  "--",
  "PATCH---创建商品---{{baseURL}}/goods",
  "DELETE---删除商品---{{baseURL}}/goods/282",
  "PATCH---修改商品---{{baseURL}}/goods/1",
  "GET---获取单个商品---{{baseURL}}/goods/1",
  "POST---获取商品列表---{{baseURL}}/goods/list---undefined",
  "--",
  'POST---创建类别---{{baseURL}}/category---{"name":"床上用品"}',
  "DELETE---删除类别---{{baseURL}}/category/1",
  "PATCH---更新类别---{{baseURL}}/category/1",
  "GET---获取单个类别---{{baseURL}}/category/1",
  'POST---获取类别列表---{{baseURL}}/category/list---{"offset":0,"size":3,"name":"子"}',
  "--",
  'POST---你的故事---{{baseURL}}/story---{"title":"我与地坛","content":"宇宙以其不息的欲望将一个歌舞炼为永恒。这欲望有怎样一个人间的姓名，大可忽略不计。"}',
  "POST---故事列表---{{baseURL}}/story/list---",
  "--",
  "POST---查询完整菜单树---{{baseURL}}/menu/list---undefined",
  "GET---查询角色菜单树---{{baseURL}}/role/4/menu",
  "GET---查询角色菜单ids---{{baseURL}}/role/4/menuIds",
  'POST---给角色分配权限---{{baseURL}}/role/assign---{"roleId":1,"menuList":[1,9,38,41,2,3,4,25,5,6,7,8,17,18,19,20,21,22,23,24,15,16,30,31,32,33,34,35,36,37,26,27,28,29,39,40,42,43]}',
  "--",
  "GET---每个分类商品的个数---{{baseURL}}/goods/category/count",
  "GET---每个分类商品的销量---{{baseURL2}}/goods/category/sale",
  "GET---每个分类商品的收藏---{{baseURL2}}/goods/category/favor",
  "GET---销量前10的商品数量---{{baseURL2}}/goods/sale/top10",
  "GET---不同城市的销量数据---{{baseURL2}}/goods/address/sale",
  "GET---商品数据统计的数量---{{baseURL}}/goods/amount/list",
];
