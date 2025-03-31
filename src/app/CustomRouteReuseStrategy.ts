import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return false; // Don't detach the route
    }
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void { }
    
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return false; // Don't reuse the route
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return null; // Always return null
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return false; // Always reload the route
    }
}