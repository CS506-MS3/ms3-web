export const API = {
  ACTIVATE: {
    method: 'POST',
    url: '/activate'
  },
  DEACTIVATE: {
    method: 'PUT',
    url: '/deactivate'
  },
  ACTIVATION_LINK: {
    method: 'POST',
    url: '/reactivate'
  },
  REQUEST_RESET_PASSWORD: {
    method: 'POST',
    url: '/reset-password-request'
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
    GET_SINGLE: {
      method: 'GET',
      url: '/properties/${propertyId}'
    }
  },
  USER: {
    CREATE: {
      method: 'POST',
      url: '/users'
    },
    BID: {
      method: 'POST',
      url: '/users/${userId}/bid'
    },
    CHECK_PASSWORD: {
      method: 'POST',
      url: '/users/${userId}/check-password'
    },
    UPDATE_PASSWORD: {
      method: 'PUT',
      url: '/users/${userId}/password'
    },
    UPDATE_ACCOUNT_INFO: {
      method: 'PUT',
      url: '/users/${userId}/account-info'
    },
    BOOKMARKS: {
      ADD: {
        method: 'POST',
        url: '/users/${userId}/bookmarks'
      },
      CLEAR: {
        method: 'DELETE',
        url: '/users/${userId}/bookmarks'
      },
      DELETE: {
        method: 'DELETE',
        url: '/users/${userId}/bookmarks/${bookmarkId}'
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
        url: '/users/${userId}/properties/${propertyId}'
      }
    }
  },
  ACCESSES: {
    GET_PRICE_INFO: {
      method: 'GET',
      url: '/accesses/pricing/byType/${type}'
    },
    ADD: {
      method: 'POST',
      url: '/accesses'
    }
  }
};
