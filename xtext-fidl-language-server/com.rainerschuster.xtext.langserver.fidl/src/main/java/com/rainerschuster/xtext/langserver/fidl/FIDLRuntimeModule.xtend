/*
 * generated by Xtext 2.13.0
 */
package com.rainerschuster.xtext.langserver.fidl

import com.google.inject.Binder
import com.google.inject.name.Names
//import org.eclipse.xtext.resource.IDefaultResourceDescriptionStrategy
import org.eclipse.xtext.scoping.IScopeProvider
import org.eclipse.xtext.scoping.impl.AbstractDeclarativeScopeProvider
import com.rainerschuster.xtext.langserver.fidl.scoping.FIDLImportedNamespaceAwareLocalScopeProvider

/**
 * Use this class to register components to be used at runtime / without the Equinox extension registry.
 */
class FIDLRuntimeModule extends AbstractFIDLRuntimeModule {
	override void configureIScopeProviderDelegate(Binder binder) {
		binder.bind(IScopeProvider).annotatedWith(
			Names.named(AbstractDeclarativeScopeProvider.NAMED_DELEGATE)
		).to(
			FIDLImportedNamespaceAwareLocalScopeProvider
		)
	}

//	def Class<? extends IDefaultResourceDescriptionStrategy> bindIDefaultResourceDescriptionStrategy() {
//		return FidlResourceDescriptionsStrategy;
//	}
}