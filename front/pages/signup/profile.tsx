import React from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';

const Profile = () => {
const handleClick = () => {
 console.log('ボタンがクリックされました！');
 };

 return (
 <div className=' text-center items-center'>
    <img src="/images/logo.png" className='w-100 h-32 m-auto pt-10' alt='ロゴ'></img>
    <p className='pt-10'>認証に成功しました</p>
    <p className='pb-10'>以下からプロフィール登録をして下さい</p>
    <p className='pb-10'>プロフィール登録</p>
    <Input 
     label="名前"/>
    <Input 
    label="フリガナ"/>
    <Input 
    label="郵便番号"/>
    <Input 
    label="都道府県"/>
    <Input 
    label="市区町村"/>
    <Input 
    label="町名番地"/>
    <Input 
    label="アパート・マンション名"/>
    <Input 
    label="電話番号"/>
    <div className='flex justify-center py-10'>
        <Button onClick={handleClick} text="登録する" />
    </div>
</div>
    );
};

export default Profile;
