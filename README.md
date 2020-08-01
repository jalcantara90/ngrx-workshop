# NgrxWorkshop

This Repo has several branches, if you want start from the starting point use master.

## 1 Installing NgRx dependencies

> npm install @ngrx/{store,effects,entity,store-devtools} --save

If You want to make you life easier when are you working with NgRx install de schematics

> ng add @ngrx/schematics


## 2 Create the Basic boilerplate of NgRx Store

> ng generate @ngrx/schematics:store --name=store --project=ngrx-workshop --module=app.module.ts --minimal --root

This should update the app.module to add basic configuration

```typescript
  StoreModule.forRoot({}, {
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    }
  }),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
```

With this you can create the most basic configuration of NgRx store, but if you need an initial reducer you can run

> ng generate @ngrx/schematics:store --name=store --project=ngrx-workshop --module=app.module.ts --root

