import * as CrudActions from './crud.actions';

export const reducer = (state, action, prefix, initialState) => {

  switch (action.type) {
    case prefix + CrudActions.SET:
      return (<CrudActions.Set>action).payload;

    case prefix + CrudActions.CLEAR:
      return initialState;

    case prefix + CrudActions.UPDATE:
      return Object.assign({}, state, (<CrudActions.Update>action).payload);

    case prefix + CrudActions.ADD_ITEM:
      return {
        ...state,
        list: [...state.list, (<CrudActions.AddItem>action).payload]
      };

    case prefix + CrudActions.REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== (<CrudActions.RemoveItem>action).payload.id)
      };

    case prefix + CrudActions.UPDATE_ITEM:
      return {
        ...state,
        list: state.list.map(
          (item) => item.id === (<CrudActions.UpdateItem>action).payload.id ?
            Object.assign({}, item, (<CrudActions.UpdateItem>action).payload) : item
        )
      };

    default:
      return state;
  }
};
