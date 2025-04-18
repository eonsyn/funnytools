'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrial, useTrialState } from '@/lib/redux/slices/trialSlice';
import { encrypt, decrypt } from '@/utils/crypto';

export default function TrialInitializer({ children }) {
  const dispatch = useDispatch();
  const trial = useSelector(useTrialState);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('encryptedTrial');
    if (data) {
      const decrypted = decrypt(data);
      if (decrypted?.trial != null) {
        dispatch(setTrial(decrypted.trial));
      }
    } else {
      const encrypted = encrypt({ trial: 3 });
      localStorage.setItem('encryptedTrial', encrypted);
      dispatch(setTrial(3));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem('encryptedTrial', encrypt({ trial }));
    }
  }, [trial]);

  if (!loaded) return null;

  return children;
}
