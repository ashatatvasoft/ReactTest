import React, { useState } from 'react';

export const VoteContext = React.createContext(null);

const VotContextProvider = (props: any) => {
    const [votes, setVote] = useState([]);

    const values = React.useMemo(() => {
        return {
            VoteData: [votes, setVote],
        };
    }, [votes]);

    return <VoteContext.Provider value={values}>{props.children}</VoteContext.Provider>;
};

export default VotContextProvider;