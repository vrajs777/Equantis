import React from "react";
import { ReactComponent as LoaderImg } from "../assets/img/site-loading.svg";
export default function Loader() {
  return (
    <>
      <div className='lds-facebook'>
        <LoaderImg></LoaderImg>
      </div>
    </>
  );
}
