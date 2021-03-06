export const API = {
  ACTIVATE: {
    method: 'GET',
    url: '/activate'
  },
  DEACTIVATE: {
    method: 'PUT',
    url: '/users/${userId}/deactivate'
  },
  ACTIVATION_LINK: {
    method: 'POST',
    url: '/reactivate'
  },
  REQUEST_RESET_PASSWORD: {
    method: 'POST',
    url: '/reset-password'
  },
  RESET_PASSWORD: {
    method: 'PUT',
    url: '/reset-password'
  },
  AUTH: {
    SIGN_IN: {
      method: 'POST',
      url: '/auth'
    },
    SIGN_OUT: {
      method: 'DELETE',
      url: '/auth'
    }
  },
  PROPERTIES: {
    QUERY: {
      method: 'GET',
      url: '/properties'
    },
    CREATE: {
      method: 'POST',
      url: '/properties'
    },
    GET_SINGLE: {
      method: 'GET',
      url: '/properties/${propertyId}'
    },
    GET_OPTIONS: {
      method: 'GET',
      url: '/properties/options'
    }
  },
  USER: {
    CREATE: {
      method: 'POST',
      url: '/users'
    },
    GET_INFO: {
      method: 'GET',
      url: '/users/${userId}/info'
    },
    BID: {
      method: 'POST',
      url: '/users/${userId}/bid'
    },
    CHECK_PASSWORD: {
      method: 'POST',
      url: '/users/${userId}/check-password'
    },
    CHANGE_PASSWORD: {
      method: 'PUT',
      url: '/users/${userId}/password'
    },
    UPDATE_ACCOUNT_INFO: {
      method: 'PUT',
      url: '/users/${userId}/account-info'
    },
    WISHLIST: {
      ADD: {
        method: 'POST',
        url: '/wishlist'
      },
      CLEAR: {
        method: 'DELETE',
        url: '/wishlist'
      },
      DELETE: {
        method: 'DELETE',
        url: '/wishlist/${id}'
      }
    },
    PROPERTIES: {
      CREATE: {
        method: 'POST',
        url: '/users/${userId}/properties'
      },
      QUERY: {
        method: 'GET',
        url: '/users/${userId}/properties'
      },
      UPDATE: {
        method: 'PUT',
        url: '/users/${userId}/properties/${propertyId}'
      },
      DELETE: {
        method: 'DELETE',
        url: '/properties/${propertyId}'
      }
    }
  },
  ACCESSES: {
    GET_PRICE_INFO: {
      method: 'GET',
      url: '/pricings'
    },
    ADD: {
      method: 'POST',
      url: '/access'
    },
    CANCEL: {
      method: 'PUT',
      url: '/access'
    }
  }
};
