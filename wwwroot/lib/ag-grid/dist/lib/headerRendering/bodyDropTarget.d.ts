import { DropTarget, DraggingEvent } from "../dragAndDrop/dragAndDropService";
export declare class BodyDropTarget implements DropTarget {
    private context;
    private gridPanel;
    private dragAndDropService;
    private columnController;
    private pinned;
    private eContainer;
    private eSecondaryContainers;
    private moveColumnController;
    private bodyDropPivotTarget;
    private currentDropListener;
    constructor(pinned: string, eContainer: HTMLElement);
    getSecondaryContainers(): HTMLElement[];
    getContainer(): HTMLElement;
    private init();
    getIconName(): string;
    private isUseBodyDropPivotTarget(draggingEvent);
    onDragEnter(draggingEvent: DraggingEvent): void;
    onDragLeave(params: DraggingEvent): void;
    onDragging(params: DraggingEvent): void;
    onDragStop(params: DraggingEvent): void;
}
