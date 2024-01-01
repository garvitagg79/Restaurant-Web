import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerNewItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NewItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dishName: string;
  readonly dishDescription: string;
  readonly price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNewItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NewItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dishName: string;
  readonly dishDescription: string;
  readonly price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NewItem = LazyLoading extends LazyLoadingDisabled ? EagerNewItem : LazyNewItem

export declare const NewItem: (new (init: ModelInit<NewItem>) => NewItem) & {
  copyOf(source: NewItem, mutator: (draft: MutableModel<NewItem>) => MutableModel<NewItem> | void): NewItem;
}

type EagerConnect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Connect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly query: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConnect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Connect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly query: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Connect = LazyLoading extends LazyLoadingDisabled ? EagerConnect : LazyConnect

export declare const Connect: (new (init: ModelInit<Connect>) => Connect) & {
  copyOf(source: Connect, mutator: (draft: MutableModel<Connect>) => MutableModel<Connect> | void): Connect;
}