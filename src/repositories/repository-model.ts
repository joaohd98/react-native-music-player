
export enum ServiceTestingSituation {
  noTesting,
  noAction,
  onFailed,
  onSuccess,
}

export abstract class RepositoryModel {
  static situation: ServiceTestingSituation = ServiceTestingSituation.noTesting

  protected callService<T>(promise: Promise<T>, onSuccess: (res: T) => void, onFailed: () => void, mockData: T) {
    if(process.env.JEST_WORKER_ID !== undefined) {
      this.callTestingFunc(() => onSuccess(mockData), onFailed)
    }
    else {
      promise.then(onSuccess).catch(onFailed)
    }
  }

  private callTestingFunc = (onSuccess: () => void, onFailed: () => void) => {
    switch (RepositoryModel.situation) {
      case ServiceTestingSituation.onFailed: onFailed(); break;
      case ServiceTestingSituation.onSuccess: onSuccess(); break;
    }
  }
}
