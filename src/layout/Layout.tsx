import React, {ReactNode, createContext, useState} from 'react';
import Backdrop from '../components/Backdrop'; // Make sure to create or import Backdrop component

interface LayoutProps {
	children: ReactNode;
}

interface DialogContextType {
	dialog: ReactNode | null;
	setDialog: React.Dispatch<React.SetStateAction<ReactNode | null>>;
}

export const layoutContext = createContext<DialogContextType | undefined>(
	undefined,
);
layoutContext.displayName = 'LayoutContext';

export const Layout: React.FC<LayoutProps> = ({children}) => {
	const [dialog, setDialog] = useState<ReactNode | null>(null);

	return (
		<layoutContext.Provider value={{dialog, setDialog}}>
			<div className="flex justify-center w-full h-screen">
				<div className="relative w-[46rem] min-w-[23rem] h-full bg-teal-400">
					{children}
				</div>
			</div>
		</layoutContext.Provider>
	);
};

export const useDialog = () => {
	const context = React.useContext(layoutContext);
	if (!context) {
		throw new Error('useDialog must be used within a Layout');
	}
	const {dialog, setDialog} = context;
	const openDialog = (element: ReactNode) => setDialog(element);
	const closeDialog = () => setDialog(null);
	return {dialog, openDialog, closeDialog};
};

export const DialogContainer = () => {
	const {dialog} = useDialog();
	return <>{dialog && <Backdrop>{dialog}</Backdrop>}</>;
};
