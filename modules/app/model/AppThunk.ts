import { AppDispatch, AppGetState } from '@/modules/app/model/store';

export const appInit =
    () => async (dispatch: AppDispatch, getState: AppGetState) => {
        // const user = await supaAuth.getUser() as User | null;
        const state = getState();
        console.log(state);
        // if (!isDetailsFetched) {
        //     dispatch(
        //         fetchAllDetails()
        //     )
        // }
    };
