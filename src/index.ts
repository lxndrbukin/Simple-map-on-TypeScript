/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from "./CustomMap";


window.addEventListener('load', () => {
    const success = (pos: any) => {
        let crd = pos.coords;
        console.log(crd.latitude);
        console.log(crd.longitude);
        const user = new User({lat: crd.latitude, lng: crd.longitude});
        const customMap = new CustomMap('map', {lat: crd.latitude, lng: crd.longitude});
        customMap.addMarker(user);
    }
    navigator.geolocation.getCurrentPosition(success);
})

