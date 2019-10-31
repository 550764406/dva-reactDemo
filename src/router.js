import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import Routes from './routes/app';

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

function RouterConfig({ history, app}) {
  Routes.map((routeitem)=>{
    let routeitemstr = routeitem.path;
    let index = routeitemstr.lastIndexOf("\/");  
    routeitemstr = routeitemstr.substring(index + 1, routeitemstr.length);
    if(routeitemstr === '' || !!routeitem){
      return false;
    }
    return registerModel(app, require('./models/'+routeitemstr).default);
  });
  

  return (
    <Router history={history}>
      <Switch>
          {
              Routes.map((route, key) => {
                  if (route.exact) {
                      return <Route exact path={route.path} component={route.component} key={key} />
                  }
                  else {
                      return <Route path={route.path} component={route.component} key={key} />
                  }
              })
          }
          {/* <Route component={NoMatch} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;


