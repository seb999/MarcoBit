import { IEventEmitter } from "../interfaces/iEventEmitter";
import { GridOptionsWrapper } from "../gridOptionsWrapper";
export declare class BeanStub implements IEventEmitter {
    private localEventService;
    private destroyFunctions;
    destroy(): void;
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    dispatchEventAsync(eventType: string, event?: any): void;
    dispatchEvent(eventType: string, event?: any): void;
    addDestroyableEventListener(eElement: HTMLElement | IEventEmitter | GridOptionsWrapper, event: string, listener: (event?: any) => void): void;
    addDestroyFunc(func: () => void): void;
}
