import React, { useState } from 'react';
import styles from './search.module.css';

interface SearchFormProps {
  onSubmit: (userName: string) => void;
}

export const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [userName, setUserName] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  return (
    <div className={styles.searchForm}>
      <input
        type='text'
        onChange={handleChange}
        placeholder={'@ Enter GitHub User'}
      />
      <button onClick={() => onSubmit(userName)}>Search</button>
    </div>
  );
};
