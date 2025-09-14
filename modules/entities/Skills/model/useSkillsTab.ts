import { useAppDispatch, useAppSelector } from '@/modules/app';
import { skillsActions } from './SkillsSlice';

export const useSkillsTab = () => {
    const dispatch = useAppDispatch();
    const currentTab = useAppSelector(state => state.skills.currentTab);
    const setCurrentTab = (tab: string) =>
        dispatch(skillsActions.setCurrentTab(tab));
    return { currentTab, setCurrentTab };
};
