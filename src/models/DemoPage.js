let bb =[{
  key: '1',
  name: '胡彦斌1',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖1',
  age: 42,
  address: '西湖区湖底公园1号'
}]
export default {

  namespace: 'demoPage',

  state: {
    data1: [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
  }, {
      key: '2',
      name: '胡彦祖2',
      age: 42,
      address: '西湖区湖底公园1号'
  }],
    data2: [{
      key: '1',
      name: '胡彦斌22222222',
      age: 32,
      address: '西湖区湖底公园1号'
  }, {
      key: '2',
      name: '胡彦祖222222222222222',
      age: 42,
      address: '西湖区湖底公园1号'
  }],
  aa:[],
  cc: [],
  dd:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log('first======================================');
    },
  },

  effects: {
    * demopagetest ({ payload }, { call, put }) {  // eslint-disable-line
      console.log('payload=======>', payload)
     yield put({ type: 'save', payload});
      
    },
  },

  reducers: {
    save(state, action) {
      console.log('model----action=====>',action)
      console.log('model----state=====>',state)
      return { ...state,
        aa: state.data1,
        cc: bb
        };      
    },
    demopagetest1(state, action) {
      console.log('model----action=====>',action)
      console.log('model----state=====>',state)
      return { ...state,
        dd: state.data2,
        };      
    },
    

  },

};
