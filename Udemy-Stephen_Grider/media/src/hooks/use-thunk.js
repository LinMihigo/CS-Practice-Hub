import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback((arg) => {
        setIsLoading(true);
        dispatch(thunk(arg)) // Returns a promise that doesn't operate normally, bse if you add a .then(), the function in .then() runs regardless of whether the promise was fulfilled successful or not.
        .unwrap() // This resets the promise to act normally. That is, function in .then() will only be called when promise is fulfilled successfully.
        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [dispatch, thunk])

    return [runThunk, isLoading, error]
}