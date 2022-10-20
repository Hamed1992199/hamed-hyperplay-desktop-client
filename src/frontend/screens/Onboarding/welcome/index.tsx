import React, { useEffect } from 'react'
import WalletOption from '../components/walletOption'
import { PROVIDERS } from 'common/types/proxy-types'
import './index.css'
import { OnboardingModalConfig } from '../types'
import { MMTransparent, PlusIcon, WCBlue } from 'frontend/assets/hyperplay'

interface WelcomeProps {
  handleProviderClicked: (provider: PROVIDERS) => void
  disableOnboarding: () => void
  setOnboardingModalParams: React.Dispatch<Partial<OnboardingModalConfig>>
  downloadMetaMaskClicked: () => void
}

const Welcome: React.FC<WelcomeProps> = function (props) {
  useEffect(() => {
    props.setOnboardingModalParams({
      title: 'WELCOME TO HYPERPLAY',
      enableBackButton: false,
      enableCloseButton: true
    })
  }, [])
  function providerClicked(prov: PROVIDERS) {
    props.handleProviderClicked(prov)
  }
  return (
    <div className="welcomeContainer">
      <div className="content-sm text-secondary">
        Please connect your wallet, or download the Metamask mobile-app to get
        started.
      </div>
      <WalletOption
        title="MetaMask Mobile"
        subtext="Connect with MetaMask Mobile"
        icon={<MMTransparent height={34} width={34} />}
        onClick={() => providerClicked(PROVIDERS.METAMASK_MOBILE)}
      />
      <WalletOption
        title="WalletConnect"
        subtext="Connect with WalletConnect"
        icon={<WCBlue height={34} width={34} />}
        onClick={() => providerClicked(PROVIDERS.WALLET_CONNECT)}
      />
      <WalletOption
        title="Create new wallet"
        subtext="Download MetaMask Mobile"
        icon={<PlusIcon height={34} width={34} />}
        onClick={() => props.downloadMetaMaskClicked()}
      />
      <button
        className="button-sm actionButton"
        onClick={() => props.disableOnboarding()}
      >
        Skip for Now
      </button>
    </div>
  )
}

export default Welcome
