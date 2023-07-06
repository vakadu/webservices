/* eslint-disable @nx/enforce-module-boundaries */
import { logEvent } from 'firebase/analytics';
import { browserName, browserVersion } from "react-device-detect";

import { analytics } from '@webservices/services';

export async function firebaseLogEvent(event: string, params?: any) {
    const event_params = {
        ...params,
		browser_name: browserName,
		browser_version: browserVersion,
        clicked_on: new Date(),
    };
    logEvent(analytics, event, event_params);
};
