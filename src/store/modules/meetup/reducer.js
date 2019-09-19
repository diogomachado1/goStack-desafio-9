import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
  loading: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/MEETUP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/MEETUP_SUCCESS': {
        draft.loading = false;
        draft.meetups = action.payload.meetups;
        break;
      }
      case '@meetup/MEETUP_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}