import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  private readonly configUrl = 'assets/config.json';
  public config: any;

  constructor(private http: HttpClient) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public load(): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const promise = this.http.get<any>(this.configUrl).toPromise();
    promise
      .then((config) => {
        this.config = config;
      })
      .catch(() => {
        throw new Error(`An error occured while loading configuration.`);
      });
    return promise;
  }

  public getValue(key: string) {
    if (key === undefined || key === null) {
      throw new Error(`Argument cannot be null, argument name 'key'.`);
    }
    if (key.length === 0) {
      throw new Error(`Argument cannot be empty, argument name 'key'.`);
    }
    if (!this.config) {
      throw new Error(
        `Attempted to access configuration property before configuration data was loaded, ` +
          `please make sure the ConfigurationModule is properly imported.`
      );
    }
    if (!this.config[key]) {
      throw new Error(
        `Required property ${key} was not defined within the configuration object. ` +
          `Please double check the result of your configation url.`
      );
    }
    return this.config[key];
  }
}
