#!/bin/sh
baseUrl=http://localhost:3000
RANDOM=$$
declare -a canistersIdsArray #TODO use data from list endpoint, not memory variable

echo "Start deploy canisters"

for i in {0..4} ; do
  deployedId=$(curl --request POST -sL --url ${baseUrl}'/deploy')
  canistersIdsArray[i]="$deployedId"
  echo "Deployed canister with ID $deployedId, ${i+1} from 5"
done

echo "Canisters deploy finished"

listRes=$(curl --request GET -sL --url ${baseUrl}'/canisters')

echo "Start set random count for deployed canisters"

for canister in "${canistersIdsArray[@]}" ; do
  value=$RANDOM
  echo "Set value for canister with ID: $canister, $value"
  curl --request POST -sL --url "${baseUrl}/${canister}/count" -d "count=$value"
done

echo "Set random count for deployed canisters finished"

echo "Start get count for deployed canisters"

for canister in "${canistersIdsArray[@]}" ; do
  value=$(curl --request GET -sL --url "${baseUrl}/${canister}/count")
  echo "Count from ${canister} is $value"
done

echo "Get count for deployed canisters finished"
