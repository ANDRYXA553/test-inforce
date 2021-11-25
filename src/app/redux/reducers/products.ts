import {ProductActions, productActionType} from "../actions/products";
import {Product} from "../../interfaces/product";
import ProductsList from "../../interfaces/productList";

export const productListNode = 'productList';


export const productList: Product[] = [
  {
    id: 1,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zpVWeqdtZTiJI_r1xWgQ1zGUzkDbsL5owq_1YuhwM6r25s00nRTH0Q22qwWhEz20SAw&usqp=CAU",
    name: "Mandarine",
    count: 4,
    size: {
      width: '200 inches',
      height: '200 inches'
    },
    weight: "100g",
    comments: [{
      id: 1,
      productId: 1,
      description: 'comment',
      date: '14:00 17.09.2002'
    }
    ]
  },
  {
    id: 2,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfX4zSeJpY4Rw6M5-QZLGM3E1NDWpLCwdLUw&usqp=CAU",
    name: "carrot",
    count: 10,
    size: {
      width: '200inches',
      height: '200inches'
    },
    weight: "200g",
    comments: [{
      id: 1,
      productId: 2,
      description: 'comment',
      date: '14:00 17.09.2002'
    },
      {
        id: 2,
        productId: 2,
        description: 'comment',
        date: '14:00 17.09.2002'
      }
    ]
  },
  {
    id: 3,
    imageUrl: "data:image/jpeg;base64,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",
    name: "Tomato",
    count: 8,
    size: {
      width: '500inches',
      height: '400inches'
    },
    weight: "300g",
    comments: [{
      id: 1,
      productId: 3,
      description: 'comment',
      date: '14:00 17.09.2002'
    },
      {
        id: 2,
        productId: 3,
        description: 'comment',
        date: '14:00 17.09.2002'
      }, {
        id: 3,
        productId: 3,
        description: 'comment',
        date: '14:00 17.09.2002'
      }
    ]
  }
]


const initialState: ProductsList = localStorage.getItem('productsList') ? JSON.parse(localStorage.getItem('productsList') as string) : {
  products: productList
}

export const productReducer = (state = initialState, action: ProductActions) => {

  switch (action.type) {

    case productActionType.create: {
      return {...state, products: [action.payload, ...state.products]}
    }

    case productActionType.delete: {
      const listAfterRemove = state.products.filter((user) => user.id !== action.payload)
      return {...state, products: [...listAfterRemove]}
    }

    case productActionType.update: {
      const listAfterUpdate = state.products.map((product) => {

        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      })
      return {...state, products: [...listAfterUpdate]}
    }

    case productActionType.saveToLs: {
      localStorage.setItem('productsList', JSON.stringify(state));
      return {...state}
    }
    case productActionType.sort: {

      const sortedList = [...state.products].sort((a, b) => {
        // @ts-ignore
        if (action.payload === 'comments') {
          if (a[action.payload].length < b[action.payload].length) {
            return 1;
          }
          // @ts-ignore
          if (a[action.payload].length > b[action.payload].length) {
            return -1;
          }
          return 0
        }
        // @ts-ignore
        if (a[action.payload] < b[action.payload]) {
          return 1;
        }
        // @ts-ignore
        if (a[action.payload] > b[action.payload]) {
          return -1;
        }
        return 0
      })

      return {...state, products: sortedList}
    }

    default : {
      return state;
    }
  }
}



