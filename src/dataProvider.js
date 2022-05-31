/* eslint-disable eqeqeq */
/* eslint-disable import/no-anonymous-default-export */
import { stringify } from 'query-string';
import api from './services/api';

export default {
  getList: (resource, params) => {
    console.log('getlist')
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    let query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    let path = ''
    if (resource == 'docentes' || resource == 'discentes' || resource == 'taes') {
      path = `users/${resource}`
      query = {
        ...query,
        sort: field === 'id' ? JSON.stringify(["name", "ASC"]) : query.sort,
      }
    } else {
      path = resource
    }
    const url = `/${path}?${stringify(query)}`;
    console.log(url)
    return api.get(url).then((response) => {
      console.log('getlist', response.data.user)
      return ({
        data: response.data.user,
        total: response.data.max,
      })
    })
  },

  getOne: (resource, params) => {
    console.log('getone')
    let path = ''
    if (resource == 'docentes' || resource == 'discentes' || resource == 'taes') {
      path = `users/${resource}`
    } else {
      path = resource
    }
    console.log(path)
    return api.get(`/${path}/${params.id}`).then((response) => {
      console.log('getone', response.data)
      return ({
        data: response.data,
      })
    })
  },

  getMany: (resource, params) => {
    console.log('getmany')
    console.log(resource)
    console.log(params.ids)
    let query = {
      filter: JSON.stringify({ id: params.ids }),
      sort: JSON.stringify(["id", "ASC"]),
      range: JSON.stringify([]),
    };
    let path = ''
    if (resource == 'docentes' || resource == 'discentes' || resource == 'taes') {
      path = `users/${resource}`
      query = {
        ...query,
        sort: JSON.stringify(["name", "ASC"]),
      }
    } else {
      path = resource
    }
    const url = `/${path}?${stringify(query)}`;
    // console.log(url)
    return api.get(url).then((response) => {
      console.log('getmany', response.data.user)
      return ({ data: response.data.user })
    });
  },

  getManyReference: (resource, params) => {
    console.log('getmanyR')
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `/${resource}?${stringify(query)}`;

    return api.get(url).then((response) => ({
      data: response.data,
      total: parseInt(response.headers.get('content-range').split('/').pop(), 10),
    }));
  },

  update: (resource, params) => {
    console.log('update')
    let path = ''
    if (resource == 'docentes' || resource == 'discentes' || resource == 'taes') {
      path = `users/${resource}`
    } else {
      path = resource
    }
    return api.put(`/${path}/${params.id}`,
      params.data,
    ).then((response) => {
      // console.log(response)
      return ({ data: response.data })
    })
  },

  updateMany: (resource, params) => {
    console.log('updateMany')
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return api.put(`/${resource}?${stringify(query)}`,
      params.data,
    ).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) => {
    console.log('create')
    let path = ''
    if (resource == 'docentes' || resource == 'discentes' || resource == 'taes') {
      path = `users/${resource}`
    } else {
      path = resource
    }
    const url = `/${path}/signup`;
    console.log(url)
    console.log(params.data)
    return api.post(url, params.data).then((response) => {
      console.log(response.data)
      return ({
        data: response.data,
      })
    })
  },

  delete: (resource, params) => {
    console.log('delete')
    let path = ''
    if (resource == 'docentes' || resource == 'discentes' || resource == 'taes') {
      path = `users/${resource}`
    } else {
      path = resource
    }
    return api.delete(`/${path}/${params.id}`).then((response) => ({ data: response.data }))
  },

  deleteMany: (resource, params) => {
    console.log('deleteMany')
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return api.delete(`/${resource}?${stringify(query)}`).then(({ json }) => ({ data: json }));
  }
};